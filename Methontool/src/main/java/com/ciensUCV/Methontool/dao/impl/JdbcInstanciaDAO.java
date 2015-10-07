package com.ciensUCV.Methontool.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.sql.DataSource;

import org.postgresql.util.PGobject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ciensUCV.Methontool.dao.AtributoInstanciaDAO;
import com.ciensUCV.Methontool.dao.InstanciaDAO;
import com.ciensUCV.Methontool.model.AtributoClase;
import com.ciensUCV.Methontool.model.AtributoInstancia;
import com.ciensUCV.Methontool.model.AtributoInstanciaDesarrollo;
import com.ciensUCV.Methontool.model.Instancia;
import com.ciensUCV.Methontool.util.VariablesConfiguracion;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.reflect.TypeToken;

public class JdbcInstanciaDAO implements InstanciaDAO {
	private static final Logger logger = LoggerFactory.getLogger(JdbcInstanciaDAO.class);
	
	private DataSource dataSource;
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}

	@Override
	public ArrayList<Instancia> listaInstanciaDadoIdGlosarioConcepto(
			int idGlosarioConcepto) {
		// TODO Auto-generated method stub
		String sql;
		sql = "SELECT id_glosario_instancia "
				+ "from instancia "
				+ "where id_glosario_concepto = ?";

		Connection conn = null;
		Instancia instancia = null;
		ArrayList<Instancia> arrayList = new ArrayList<Instancia>();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idGlosarioConcepto);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				instancia = new Instancia();
				instancia.setIdGlosario(rs.getInt("id_glosario_instancia"));
				arrayList.add(instancia);
			}
			rs.close();
			ps.close();
			return arrayList;	
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			throw new RuntimeException(e);
		} catch(Exception e) {
			logger.info("error "+e.toString());
			return arrayList;	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return arrayList;
				}
			}
		}
	}
	@Override
	public ArrayList<Instancia> listarInstanciaSinConceptoAsociado(int idProyecto) {
		// TODO Auto-generated method stub
		String sql;
		sql = "select glo.id_glosario "
				+ "from glosario as glo "
				+ "left join instancia as inst on glo.id_glosario =  inst.id_glosario_instancia "
				+ "left join proyecto as proy on glo.id_proyecto = proy.id_proyecto "
				+ "where tipo_glosario = 8 "
				+ "and inst.id_glosario_instancia is null "
				+ "and glo.id_proyecto = ?";

		Connection conn = null;
		Instancia instancia = null;
		ArrayList<Instancia> arrayList = new ArrayList<Instancia>();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idProyecto);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				instancia = new Instancia();
				instancia.setIdGlosario(rs.getInt("id_glosario"));
				arrayList.add(instancia);
			}
			rs.close();
			ps.close();
			return arrayList;	
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			throw new RuntimeException(e);
		} catch(Exception e) {
			logger.info("error "+e.toString());
			return arrayList;	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return arrayList;
				}
			}
		}
	}
	@Override
	public Instancia verInstanciaDadoIdInstancia(int idInstancia) {
		// TODO Auto-generated method stub
		String sql;
		sql = "select id_instancia "
				+ ",id_glosario_instancia "
				+ ", id_glosario_concepto"
				+ " from instancia"
				+ " where id_instancia = ?";
		
		Instancia instancia = new Instancia();
		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idInstancia);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				instancia = new Instancia();
				instancia.setId(rs.getInt("id_instancia"));
				instancia.setIdGlosario(rs.getInt("id_glosario_instancia"));
				instancia.setIdGlosarioConceptoRelacion(rs.getInt("id_glosario_concepto"));
			}
			rs.close();
			ps.close();
			return instancia;	
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			throw new RuntimeException(e);
		} catch(Exception e) {
			logger.info("error "+e.toString());
			return instancia;	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return instancia;
				}
			}
		}
	}
	@Override
	public Instancia verInstanciaDadoIdGlosarioInstancia(int idGlosarioInstancia) {
		// TODO Auto-generated method stub
		
		// TODO Auto-generated method stub
		String sql;
		sql = "select id_instancia "
				+ "id_instancia"
				+ ",id_glosario_instancia "
				+ ",id_glosario_concepto "
				+ ",definicion "
				+ " from instancia"
				+ " where id_glosario_instancia = ?";
		
//		OJO hacer arreglo para tomar el json definicion
//		editar para agregar propiedades nuevas y eliminar las que no tienen relacion al concepto
		
		Instancia instancia = new Instancia();
		Connection conn = null; 
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idGlosarioInstancia);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				instancia = new Instancia();
				instancia.setId(rs.getInt("id_instancia"));
				instancia.setIdGlosario(rs.getInt("id_glosario_instancia"));
				instancia.setIdGlosarioConceptoRelacion(rs.getInt("id_glosario_concepto"));
				
				JsonArray jsonArray;
				JsonParser parser = new JsonParser();
	            PGobject dataObject = new PGobject();
	            dataObject.setType("json");
	            logger.debug("antes del error");
	            dataObject = (PGobject)rs.getObject("definicion");
	            jsonArray = (JsonArray) parser.parse(dataObject.toString());
				String aux = jsonArray.toString();
				instancia.setDefinicion(jsonArray);
				logger.debug("instancia.getDefinicion().size() "+instancia.getDefinicion().size());
				
//				JsonObject jsonObject;
//				JsonParser parser = new JsonParser();
//	            PGobject dataObject = new PGobject();
//	            dataObject.setType("json");
//	            dataObject = (PGobject)rs.getObject("definicion");
//	            jsonObject = (JsonObject) parser.parse(dataObject.toString());
//	            instancia.setDefinicion(jsonObject.toString()); 
				
			}
			rs.close();
			ps.close();
			return instancia;	
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			throw new RuntimeException(e);
		} catch(Exception e) {
			logger.info("error "+e.toString());
			return instancia;	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return instancia;
				}
			}
		}
	}

}
