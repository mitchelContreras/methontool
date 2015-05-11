package com.ciensUCV.Methontool.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ciensUCV.Methontool.dao.TaxonomiaDAO;
import com.ciensUCV.Methontool.model.Glosario;
import com.ciensUCV.Methontool.model.Taxonomia;
import com.ciensUCV.Methontool.model.TipoGlosario;

public class JdbcTaxonomiaDAO implements TaxonomiaDAO {
	private static final Logger logger = LoggerFactory.getLogger(JdbcTaxonomiaDAO.class);
	
	private DataSource dataSource;
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	
	@Override
	public ArrayList<Taxonomia> listarTaxonomia(int idProyecto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Taxonomia verTaxonomia(int idProyecto, int idConceptoOrigen) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Taxonomia actualizarTaxonomia (int idProyecto, Taxonomia taxonomia) {
		// TODO Auto-generated method stub
		logger.trace("entre a actualizaraxonomia");
		String sql = null;
		sql = "SELECT SP_crear_actualizar_taxonomia (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
//		--SELECT SP_crear_actualizar_taxonomia (1, 1,
//		varchar 'desDisjunta', array[4,6,7,9,10,12], 
//		varchar 'desDisjunta', array[4,6,7,9,10,12],
//		varchar 'desDisjunta', array[4,6,7,9,10,12], 
//		varchar 'desDisjunta', array[4,6,7,9,10,12] );
		Connection conn = null;
		Taxonomia taxonomiaResult = new Taxonomia ();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idProyecto);
			ps.setInt(2, taxonomia.getConceptoOrigen());
			
			//Primera relacion
			ps.setString(3, taxonomia.getRelaciones().get(0));
			Object aux [] = (Integer []) taxonomia.getConceptosDestino().returnArr(0); 
			java.sql.Array prueba = conn.createArrayOf("integer", aux);
			ps.setArray(4, prueba);
			//segunda relacion
			ps.setString(5, taxonomia.getRelaciones().get(1));
			aux = (Integer []) taxonomia.getConceptosDestino().returnArr(1); 
			logger.trace("aux es "+aux);
			if(aux == null){
				logger.trace("es null");
				prueba = conn.createArrayOf("integer", null);
			}else{
				prueba = conn.createArrayOf("integer", aux);
			}
			logger.trace("sali");
			ps.setArray(6, prueba);
			//segunda relacion
			ps.setString(7, taxonomia.getRelaciones().get(2));
			aux = (Integer []) taxonomia.getConceptosDestino().returnArr(2); 
			prueba = conn.createArrayOf("integer", aux);
			ps.setArray(8, prueba);	
			//segunda relacion
			ps.setString(9, taxonomia.getRelaciones().get(3));
			aux = (Integer []) taxonomia.getConceptosDestino().returnArr(3); 
			prueba = conn.createArrayOf("integer", aux);
			ps.setArray(10, prueba);
			
			ResultSet rs = ps.executeQuery();
			while(rs.next()){
				logger.trace("salida es "+rs.getInt("SP_crear_actualizar_taxonomia"));
			}
			rs.close();
			ps.close();
		} 
		catch(SQLException e){
			logger.error(""+e);
		}
		catch (Exception e) {
			// TODO: handle exception
			logger.error(""+e);
		}

		
		
		
		return null;
	}

}
