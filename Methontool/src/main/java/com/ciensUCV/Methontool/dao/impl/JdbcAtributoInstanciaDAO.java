package com.ciensUCV.Methontool.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ciensUCV.Methontool.dao.AtributoInstanciaDAO;
import com.ciensUCV.Methontool.model.AtributoClase;
import com.ciensUCV.Methontool.model.AtributoInstancia;
import com.ciensUCV.Methontool.model.Medida;
import com.ciensUCV.Methontool.model.TipoDeDato;

public class JdbcAtributoInstanciaDAO implements AtributoInstanciaDAO {
	private static final Logger logger = LoggerFactory.getLogger(JdbcAtributoInstanciaDAO.class);
	
	private DataSource dataSource;
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	@Override
	public ArrayList<AtributoInstancia> listarAtributoInstanciaDadoIdGlosarioConcepto(
			int idGlosarioConcepto) {
		// TODO Auto-generated method stub
		String sql;
		sql = "select id_glosario_atributo"
				+ " from atributo_instancia"
				+ " where id_glosario_concepto = ?";

		Connection conn = null;
		AtributoInstancia atributoInstancia = null;
		ArrayList<AtributoInstancia> arrayList = new ArrayList<AtributoInstancia>();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idGlosarioConcepto);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				atributoInstancia = new AtributoInstancia();
				atributoInstancia.setIdGlosario(rs.getInt("id_glosario_atributo"));
				arrayList.add(atributoInstancia);
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
	public ArrayList<AtributoInstancia> listarAtributoInstanciaSinConceptoAsociado(int idProyecto) {
		// TODO Auto-generated method stub
		String sql;
		sql = "select glo.id_glosario "
				+ "from glosario as glo "
				+ "left join atributo_instancia as instancia on glo.id_glosario =  instancia.id_glosario_atributo "
				+ "left join proyecto as proy on glo.id_proyecto = proy.id_proyecto "
				+ "where tipo_glosario = 3 "
				+ "and instancia.id_glosario_atributo is null "
				+ "and glo.id_proyecto = ?";

		Connection conn = null;
		AtributoInstancia atributoInstancia = null;
		ArrayList<AtributoInstancia> arrayList = new ArrayList<AtributoInstancia>();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idProyecto);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				atributoInstancia = new AtributoInstancia();
				atributoInstancia.setIdGlosario(rs.getInt("id_glosario"));
				arrayList.add(atributoInstancia);
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
	public AtributoInstancia verAtributoInstancia(int idProyecto,
			int idGlosarioAtrbInstancia) {
		// TODO Auto-generated method stub
		String sql;
		sql = "select id_atributo, "
				+ "id_glosario_atributo, "
				+ "id_glosario_concepto, "
				+ "cod_dato, "
				+ "cod_medida, "
				+ "precision, "
				+ "rango_valores, "
				+ "cardinalidad_minimo, "
				+ "cardinalidad_maximo, "
				+ "valor_defecto "
				+ "from atributo_instancia "
				+ "where id_glosario_atributo = ? ";

		Connection conn = null;
		AtributoInstancia atributoInstancia = null;
		atributoInstancia = new AtributoInstancia();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idGlosarioAtrbInstancia);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				atributoInstancia.setId(rs.getInt("id_atributo"));
				atributoInstancia.setIdGlosario(rs.getInt("id_glosario_atributo"));
				atributoInstancia.setIdGlosarioConcepto(rs.getInt("id_glosario_concepto"));
				atributoInstancia.setTipoDeDato(new TipoDeDato(0, rs.getString("cod_dato"), null, null));
				atributoInstancia.setMedida(new Medida(0, rs.getString("cod_medida"), null, null));
				atributoInstancia.setPrecision(rs.getString("precision"));
				atributoInstancia.setRangoValores(rs.getString("rango_valores"));
				atributoInstancia.setCardinalidadMin(rs.getString("cardinalidad_minimo"));
				atributoInstancia.setCardinalidadMax(rs.getString("cardinalidad_maximo"));
				atributoInstancia.setValue(rs.getString("valor_defecto"));
			}
			rs.close();
			ps.close();
			return atributoInstancia;	
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			throw new RuntimeException(e);
		} catch(Exception e) {
			logger.info("error "+e.toString());
			return atributoInstancia;	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return atributoInstancia;
				}
			}
		}
	}
	@Override
	public AtributoInstancia actualizarAtributoInstancia(int idProyecto,
			AtributoInstancia atributoInstancia) {
		// TODO Auto-generated method stub
		return null;
	}

}
