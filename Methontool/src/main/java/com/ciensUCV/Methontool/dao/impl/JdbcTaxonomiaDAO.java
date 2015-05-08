package com.ciensUCV.Methontool.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.ArrayList;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ciensUCV.Methontool.dao.TaxonomiaDAO;
import com.ciensUCV.Methontool.model.Taxonomia;

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
		sql = "SELECT SP_crear_actualizar_taxonomia (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
//		--SELECT SP_crear_actualizar_taxonomia (1, 1,
//		varchar 'desDisjunta', array[4,6,7,9,10,12], 
//		varchar 'desDisjunta', array[4,6,7,9,10,12],
//		varchar 'desDisjunta', array[4,6,7,9,10,12], 
//		varchar 'desDisjunta', array[4,6,7,9,10,12] );
		Connection conn = null;
		logger.trace("la clase es "+taxonomia.getConceptosDestino().get(0).getClass());
		
//		try {
//			conn = dataSource.getConnection();
//			PreparedStatement ps = conn.prepareStatement(sql);
//			ps.setInt(1, idProyecto);
//			ps.setInt(2, taxonomia.getConceptoOrigen());
//			ps.setString(3, taxonomia.getRelaciones().get(0));
//			Object[] aux = new Object[taxonomia.getConceptosDestino().get(0).size()];
//			logger.trace("la clase es "+taxonomia.getConceptosDestino().get(0).getClass());
//			taxonomia.getConceptosDestino().get(0).toArray();
//			aux = taxonomia.getConceptosDestino().get(0).toArray();
//			int[] aux1;
//
//			
////			ps.setArray(4, taxonomia.getConceptosDestino().get(0).toArray());
////			taxonomia.getConceptosDestino().get(0).toArray(new Integer [taxonomia.getConceptosDestino().get(0).size()]);
//			
////			arreglo 0
//			ps.setString(5, taxonomia.getRelaciones().get(1));
////			arreglo 1
//			ps.setString(7, taxonomia.getRelaciones().get(2));
////			arreglo 2			
//			ps.setString(9, taxonomia.getRelaciones().get(3));
////			arreglo 3
//			
//		} catch (Exception e) {
//			// TODO: handle exception
//		}
		
		
		
		return null;
	}

}
