package com.ciensUCV.Methontool.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ciensUCV.Methontool.dao.InstanciaDAO;
import com.ciensUCV.Methontool.model.AtributoClase;
import com.ciensUCV.Methontool.model.Instancia;

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
	public ArrayList<Instancia> listarInstanciaSinConceptoAsociado() {
		// TODO Auto-generated method stub
		String sql;
		sql = "select glo.id_glosario "
				+ "from glosario as glo "
				+ "left join instancia as inst on glo.id_glosario =  inst.id_glosario_instancia "
				+ "where tipo_glosario = 8 "
				+ "and inst.id_glosario_instancia is null";

		Connection conn = null;
		Instancia instancia = null;
		ArrayList<Instancia> arrayList = new ArrayList<Instancia>();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
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

}
