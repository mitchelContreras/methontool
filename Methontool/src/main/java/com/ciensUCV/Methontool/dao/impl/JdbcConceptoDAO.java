package com.ciensUCV.Methontool.dao.impl;

import java.sql.Array;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ciensUCV.Methontool.dao.ConceptoDAO;
import com.ciensUCV.Methontool.model.AtributoClase;
import com.ciensUCV.Methontool.model.AtributoInstancia;
import com.ciensUCV.Methontool.model.Instancia;

public class JdbcConceptoDAO implements ConceptoDAO {

	private static final Logger logger = LoggerFactory.getLogger(JdbcConceptoDAO.class);
	
	private DataSource dataSource;
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}	
	
	@Override
	public String actualizarConcepto(ArrayList<Integer> listaInstancia,
			ArrayList<Integer> listaAtributoInstancia,
			ArrayList<Integer> listaAtributoClase,
			int idGlosarioConcepto) {
		// TODO Auto-generated method stub
		String sql = null;
		Connection conn = null;
		Array array;
		Object[] arrayOb;		
		sql = "select sp_actualizarConcepto (?, ?, ?, ?)";
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			
			arrayOb = listaInstancia.toArray();
			array = conn.createArrayOf("integer", arrayOb);
			ps.setArray(1, array);
			
			arrayOb = listaAtributoInstancia.toArray();
			array = conn.createArrayOf("integer", arrayOb);
			ps.setArray(2, array);
			
			arrayOb = listaAtributoClase.toArray();
			array = conn.createArrayOf("integer", arrayOb);
			ps.setArray(3, array);
			
			ps.setInt(4, idGlosarioConcepto);
			ResultSet rs = ps.executeQuery();
			if(rs.next()){
				return rs.getString("sp_actualizarConcepto");
			}		
			
		} catch (SQLException e) {
			logger.info("SQLException "+e.toString());
			throw new RuntimeException(e);
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					logger.error(e.toString());
					return "error";
				} catch(Exception e){
					logger.info(e.toString());
				}
			}
		}
		
		return "error";
	}

}
