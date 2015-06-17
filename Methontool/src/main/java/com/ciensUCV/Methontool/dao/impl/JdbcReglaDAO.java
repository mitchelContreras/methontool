package com.ciensUCV.Methontool.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ciensUCV.Methontool.dao.ReglaDAO;
import com.ciensUCV.Methontool.model.Axioma;
import com.ciensUCV.Methontool.model.Regla;

public class JdbcReglaDAO implements ReglaDAO {
	private static final Logger logger = LoggerFactory.getLogger(JdbcReglaDAO.class);
	
	private DataSource dataSource;
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	@Override
	public int crearRegla(int idProyecto, int idGlosarioRegla) {
		String sql;
		sql = " INSERT INTO regla (id_glosario_regla)"
				+ " VALUES (?) RETURNING id_regla;";

		Connection conn = null;
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idGlosarioRegla);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				return rs.getInt("id_regla");
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
	public Regla actualizarRegla(int idProyecto, Regla regla) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Regla verRegla(int idProyecto, int idGlosarioRegla) {
		// TODO Auto-generated method stub
		String sql;
		sql = "select id_regla "
				+ ",id_glosario_regla "
				+ ",expresion "
				+ ",variables "
				+ " from regla"
				+ " where id_glosario_regla = ?";

		Connection conn = null;
		Regla regla = new Regla();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idGlosarioRegla);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()){
				regla.setId(rs.getInt("id_regla"));
				regla.setIdGlosarioRegla(rs.getInt("id_glosario_regla"));
				regla.setExpresion(rs.getString("expresion"));
				regla.variablesStringToArray(rs.getString("variables"));
				regla.setAtributoInstancia(atrbInstanciaDadoRegla(idProyecto, regla.getIdGlosarioRegla()));
				regla.setAtributosClase(atrbClaseDadoRegla(idProyecto, regla.getIdGlosarioRegla()));
				regla.setConceptos(conceptoDadoRegla(idProyecto, regla.getIdGlosarioRegla()));
				regla.setRelaciones(relacionDadoRegla(idProyecto, regla.getIdGlosarioRegla()));
			}
			rs.close();
			ps.close();
			return regla;	
		} catch (SQLException e) {
			logger.info("SQLException "+e);
			throw new RuntimeException(e);
		} catch(Exception e) {
			logger.info("error "+e.toString());
			return regla;	
		} finally {
			if (conn != null) {
				try {
				conn.close();
				} catch (SQLException e) {
					return regla;
				}
			}
		}
	}

	@Override
	public ArrayList<Integer> conceptoDadoRegla(int idProyecto,
			int idGlosarioRegla) {
		// TODO Auto-generated method stub
		String sql;
		sql = "select id_glosario_concepto"
				+ " from regla_concepto"
				+ " where id_glosario_regla = ?";

		Connection conn = null;
		ArrayList<Integer> arrayList = new ArrayList<Integer>();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idGlosarioRegla);
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
	public ArrayList<Integer> relacionDadoRegla(int idProyecto,
			int idGlosarioRegla) {
		// TODO Auto-generated method stub
		String sql;
		sql = "select id_glosario_relacion"
				+ " from regla_relacion"
				+ " where id_glosario_regla = ?";

		Connection conn = null;
		ArrayList<Integer> arrayList = new ArrayList<Integer>();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idGlosarioRegla);
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
	public ArrayList<Integer> atrbClaseDadoRegla(int idProyecto,
			int idGlosarioRegla) {
		// TODO Auto-generated method stub
		String sql;
		sql = "select id_glosario_atributo "
				+ " from regla_atributo"
				+ " where id_glosario_regla = ? "
				+ "and tipo_atributo = 1";

		Connection conn = null;
		ArrayList<Integer> arrayList = new ArrayList<Integer>();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idGlosarioRegla);
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
	public ArrayList<Integer> atrbInstanciaDadoRegla(int idProyecto,
			int idGlosarioRegla) {
		// TODO Auto-generated method stub
		String sql;
		sql = "select id_glosario_atributo "
				+ " from regla_atributo"
				+ " where id_glosario_regla = ? "
				+ "and tipo_atributo = 2";

		Connection conn = null;
		ArrayList<Integer> arrayList = new ArrayList<Integer>();
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, idGlosarioRegla);
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
