package com.ciensUCV.Methontool.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ciensUCV.Methontool.dao.AtributoClaseDAO;
import com.ciensUCV.Methontool.model.AtributoClase;

public class JdbcAtributoClaseDAO implements AtributoClaseDAO {
	private static final Logger logger = LoggerFactory.getLogger(JdbcAtributoClaseDAO.class);
	
	private DataSource dataSource;
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	@Override
	public ArrayList<AtributoClase> listarAtributoClaseDadoIdGlosarioConcepto(
			int idGlosarioConcepto) {
		// TODO Auto-generated method stub
		String sql;
		sql = "select id_glosario_atributo "
				+ "from atributo_clase where "
				+ "id_glosario_concepto = ?";

		Connection conn = null;
		AtributoClase atributoClase = null;
		ArrayList<AtributoClase> arrayList = new ArrayList<AtributoClase>();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idGlosarioConcepto);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				atributoClase = new AtributoClase();
				atributoClase.setIdGlosario(rs.getInt("id_glosario_atributo"));
				arrayList.add(atributoClase);
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
	public ArrayList<AtributoClase> listarAtributoClaseSinConceptoAsociado(int idProyecto) {
		// TODO Auto-generated method stub
		String sql;
		sql = "select glo.id_glosario "
				+ "from glosario as glo "
				+ "left join atributo_clase as clase on glo.id_glosario =  clase.id_glosario_atributo "
				+ "left join proyecto as proy on glo.id_proyecto = proy.id_proyecto "
				+ "where tipo_glosario = 4 "
				+ "and clase.id_glosario_atributo is null "
				+ "and glo.id_proyecto = ?";

		Connection conn = null;
		AtributoClase atributoClase = null;
		ArrayList<AtributoClase> arrayList = new ArrayList<AtributoClase>();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idProyecto);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				atributoClase = new AtributoClase();
				atributoClase.setIdGlosario(rs.getInt("id_glosario"));
				arrayList.add(atributoClase);
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
