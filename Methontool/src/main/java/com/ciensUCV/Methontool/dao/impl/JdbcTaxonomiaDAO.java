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
		String sql = null;
		Connection conn = null;
		Taxonomia taxonomia = new Taxonomia();
		taxonomia.setConceptoOrigen(idConceptoOrigen);
		
		sql = "SELECT id_glosario_destino"
				+ " FROM taxonomia WHERE "
				+ "id_proyecto = ? AND "
				+ "id_glosario_origen = ? AND "
				+ "codigo_tipo_taxonomia = ?";
		
		//recorro el arreglo de tipo_taxonomia
		int i;
		for(i=0; i<taxonomia.getRelaciones().size();i++){
			try {
				logger.trace("Iteracion i="+i);
				logger.trace("relacion "+taxonomia.getRelaciones().get(i));
				conn = dataSource.getConnection();
				PreparedStatement ps = conn.prepareStatement(sql);
				ps.setInt(1, idProyecto);
				ps.setInt(2, taxonomia.getConceptoOrigen());
				ps.setString(3, taxonomia.getRelaciones().get(i));
				
				ResultSet rs = ps.executeQuery();
				while(rs.next()){
					taxonomia.getConceptosDestino().addToInnerArray(i, rs.getInt("id_glosario_destino"));
				}
				rs.close();
				ps.close();
			} catch (Exception e) {
				// TODO: handle exception
				taxonomia.setConceptoOrigen(0);
				return taxonomia;
			}
		}
		
		return taxonomia;
	}

	@Override
	public int actualizarTaxonomia (int idProyecto, Taxonomia taxonomia) {
		// TODO Auto-generated method stub
		String sql = null;
		String salida = null;
		Connection conn = null;
		int contador = 0;
		
		Object aux1 [] = (Integer []) taxonomia.getConceptosDestino().returnArr(0);
		if(aux1 != null){
			contador ++;
			logger.trace("uno no es null");
		}
		
		Object aux2 [] = (Integer []) taxonomia.getConceptosDestino().returnArr(1);
		if(aux2 != null){
			contador ++;
			logger.trace("dos no es null");
		}
		
		Object aux3 [] = (Integer []) taxonomia.getConceptosDestino().returnArr(2);
		if(aux3 != null){
			contador ++;
			logger.trace("tres no es null");
		}
		
		Object aux4 [] = (Integer []) taxonomia.getConceptosDestino().returnArr(3);
		if(aux4 != null){
			contador ++;
			logger.trace("cuatro no es null");
		}
		logger.trace("contador es "+contador);
		
		switch (contador){
		case 0:
			sql = "SELECT SP_crear_actualizar_taxonomia_0 (?, ?)";
			salida = "SP_crear_actualizar_taxonomia_0";
			break;
		case 1:
			sql = "SELECT SP_crear_actualizar_taxonomia_1 (?, ?, ?, ?)";
			salida = "SP_crear_actualizar_taxonomia_1";
			break;
		case 2:
			sql = "SELECT SP_crear_actualizar_taxonomia_2 (?, ?, ?, ?, ?, ?)";
			salida = "SP_crear_actualizar_taxonomia_2";
			break;
		case 3:
			sql = "SELECT SP_crear_actualizar_taxonomia_3 (?, ?, ?, ?, ?, ?, ?, ?)";
			salida = "SP_crear_actualizar_taxonomia_3";
			break;
		case 4:
			sql = "SELECT SP_crear_actualizar_taxonomia_4 (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
			salida = "SP_crear_actualizar_taxonomia_4";
			break;
		default:
//			falta editar esto;
			return -1;
		}
		logger.trace("sql es "+sql);
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idProyecto);
			ps.setInt(2, taxonomia.getConceptoOrigen());
			
//			Primera relacion
			contador = 3;
			java.sql.Array aux;
			if(aux1 != null){
				logger.trace("arr1");
				aux = conn.createArrayOf("integer", aux1);
				ps.setString(contador, taxonomia.getRelaciones().get(0)); //relaciones.add("desDisjunta");
				contador++;
				ps.setArray(contador, aux);
				contador++;
			}
			
			if(aux2 != null){
				logger.trace("arr2");
				aux = conn.createArrayOf("integer", aux2);
				ps.setString(contador, taxonomia.getRelaciones().get(1)); //relaciones.add("desExhaustiva");
				contador++;
				ps.setArray(contador, aux);
				contador++;
			}

			if(aux3 != null){
				logger.trace("arr3");
				aux = conn.createArrayOf("integer", aux3);
				ps.setString(contador, taxonomia.getRelaciones().get(2)); //relaciones.add("particion");
				contador++;
				ps.setArray(contador, aux);
				contador++;
			}

			if(aux4 != null){
				logger.trace("arr4");
				aux = conn.createArrayOf("integer", aux4);
				ps.setString(contador, taxonomia.getRelaciones().get(3)); //relaciones.add("subClase");
				contador++;
				ps.setArray(contador, aux);
				contador++;
			}
			logger.trace("Contador es "+contador);
			ResultSet rs = ps.executeQuery();
			while(rs.next()){
				contador = rs.getInt(salida);
				logger.trace("Actualizar taxonomia con resultado "+rs.getInt(contador));
				return contador;
				
			}
			rs.close();
			ps.close();
		} catch (Exception e) {
			// TODO: handle exception
			logger.error(""+e.toString());
		}
		return -1;
	}

}
