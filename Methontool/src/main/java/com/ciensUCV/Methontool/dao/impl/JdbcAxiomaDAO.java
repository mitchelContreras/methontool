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

import com.ciensUCV.Methontool.dao.AxiomaDAO;
import com.ciensUCV.Methontool.model.AtributoInstancia;
import com.ciensUCV.Methontool.model.Axioma;
import com.ciensUCV.Methontool.model.Glosario;

public class JdbcAxiomaDAO implements AxiomaDAO {
	private static final Logger logger = LoggerFactory.getLogger(JdbcAxiomaDAO.class);
	
	private DataSource dataSource;
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	
	@Override
	public int actualizarAxioma(int idProyecto, Axioma axioma) {
		// TODO Auto-generated method stub
		String sql;
		sql = " SELECT sp_actualizar_axioma(?, ?, ?, ?, ?, ?, ?);";

		
//				+ "1 (varidglosarioaxioma integer,"
//				+ " 2 varexpresion character varying,"
//				+ " 3 varvariables character varying,"
//				+ " 4 varconceptos integer[],"
//				+ " 5 varrelaciones integer[],"
//				+ " 6 varatrbclase integer[],"
//				+ " 7 varatrbinstancia integer[]);";
				
		Connection conn = null;
		Array array;
		Object[] arrayOb;	
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			
			ps.setInt(1, axioma.getIdGlosarioAxioma());
			ps.setString(2, axioma.getExpresion());
			ps.setString(3, axioma.variablesArrayToString());
			arrayOb = axioma.getConceptos().toArray();
			array = conn.createArrayOf("integer", arrayOb);
			ps.setArray(4, array);
			
			arrayOb = axioma.getRelaciones().toArray();
			array = conn.createArrayOf("integer", arrayOb);
			ps.setArray(5, array);
			
			arrayOb = axioma.getAtributosClase().toArray();
			array = conn.createArrayOf("integer", arrayOb);
			ps.setArray(6, array);
			
			arrayOb = axioma.getAtributoInstancia().toArray();
			array = conn.createArrayOf("integer", arrayOb);
			ps.setArray(7, array);
			
			ResultSet rs = ps.executeQuery();
			if(rs.next()){
				String salida =  rs.getString("sp_actualizar_axioma");
				if(salida.equalsIgnoreCase("exito")){
					return 1;
				}else{
					return 0; 
				}
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
					return 0;
				} catch(Exception e){
					logger.info(e.toString());
				}
			}
		}
		
		return 0;
	}
	
	@Override
	public int crearAxioma(int idProyecto, int idGlosarioAxioma) {
		// TODO Auto-generated method stub
		String sql;
		sql = " INSERT INTO axioma (id_glosario_axioma)"
				+ " VALUES (?) RETURNING id_axioma;";

		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idGlosarioAxioma);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				return rs.getInt("id_axioma");
			}
			rs.close();
			ps.close();
			return 0;	
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			throw new RuntimeException(e);
		} catch(Exception e) {
			logger.info("error "+e.toString());
			return 0;	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return 0;
				}
			}
		}
	}

	@Override
	public Axioma verAxioma(int idProyecto, int idGlosarioAxioma) {
		// TODO Auto-generated method stub
		String sql;
		sql = "select id_axioma "
				+ ",id_glosario_axioma "
				+ ",expresion "
				+ ",variables "
				+ " from axioma"
				+ " where id_glosario_axioma = ?";

		Connection conn = null;
		Axioma axioma = new Axioma();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idGlosarioAxioma);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				axioma.setId(rs.getInt("id_axioma"));
				axioma.setIdGlosarioAxioma(rs.getInt("id_glosario_axioma"));
				axioma.setExpresion(rs.getString("expresion"));
				axioma.variablesStringToArray(rs.getString("variables"));
				axioma.setAtributoInstancia(atrbInstanciaDadoAxioma(idProyecto, axioma.getIdGlosarioAxioma()));
				axioma.setAtributosClase(atrbClaseDadoAxioma(idProyecto, axioma.getIdGlosarioAxioma()));
				axioma.setConceptos(conceptoDadoAxioma(idProyecto, axioma.getIdGlosarioAxioma()));
				axioma.setRelaciones(relacionDadoAxioma(idProyecto, axioma.getIdGlosarioAxioma()));
			}
			rs.close();
			ps.close();
			return axioma;	
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			throw new RuntimeException(e);
		} catch(Exception e) {
			logger.info("error "+e.toString());
			return axioma;	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return axioma;
				}
			}
		}
	}

	@Override
	public ArrayList<Integer> conceptoDadoAxioma(int idProyecto,
			int idGlosarioAxioma) {
		// TODO Auto-generated method stub
		String sql;
		sql = "select id_glosario_concepto"
				+ " from axioma_concepto"
				+ " where id_glosario_axioma = ?";

		Connection conn = null;
		ArrayList<Integer> arrayList = new ArrayList<Integer>();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idGlosarioAxioma);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				arrayList.add(rs.getInt("id_glosario_concepto"));
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
	public ArrayList<Integer> relacionDadoAxioma(int idProyecto,
			int idGlosarioAxioma) {
		// TODO Auto-generated method stub
		String sql;
		sql = "select id_glosario_relacion"
				+ " from axioma_relacion"
				+ " where id_glosario_axioma = ?";

		Connection conn = null;
		ArrayList<Integer> arrayList = new ArrayList<Integer>();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idGlosarioAxioma);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				arrayList.add(rs.getInt("id_glosario_relacion"));
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
	public ArrayList<Integer> atrbClaseDadoAxioma(int idProyecto,
			int idGlosarioAxioma) {
		// TODO Auto-generated method stub
		String sql;
		sql = "select id_glosario_atributo"
				+ " from axioma_atributo"
				+ " where id_glosario_axioma = ? and tipo_atributo = 1";

		Connection conn = null;
		ArrayList<Integer> arrayList = new ArrayList<Integer>();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idGlosarioAxioma);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				arrayList.add(rs.getInt("id_glosario_atributo"));
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
	public ArrayList<Integer> atrbInstanciaDadoAxioma(int idProyecto,
			int idGlosarioAxioma) {
		// TODO Auto-generated method stub
		String sql;
		sql = "select id_glosario_atributo"
				+ " from axioma_atributo"
				+ " where id_glosario_axioma = ? and tipo_atributo = 2";

		Connection conn = null;
		ArrayList<Integer> arrayList = new ArrayList<Integer>();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idGlosarioAxioma);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				arrayList.add(rs.getInt("id_glosario_atributo"));
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
