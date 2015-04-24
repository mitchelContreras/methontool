package com.ciensUCV.Methontool.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ciensUCV.Methontool.dao.TipoGlosarioDAO;
import com.ciensUCV.Methontool.model.Glosario;
import com.ciensUCV.Methontool.model.TipoGlosario;

public class JdbcTipoGlosarioDAO implements TipoGlosarioDAO {
	private static final Logger logger = LoggerFactory.getLogger(JdbcTipoGlosarioDAO.class);
	
	private DataSource dataSource;
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	
	@Override
	public ArrayList<TipoGlosario> listarTipoGlosario() {
		// TODO Auto-generated method stub
		String sql;
		sql = "select "
				+ "tg.id_tipo_glosario "
				+ ",tg.codigo "
				+ ",tg.nombre "
				+ ",tg.descripcion "
				+ "from tipo_glosario as tg";
		Connection conn = null;
		TipoGlosario tipoGlosario;
		ArrayList<TipoGlosario> arrayList = new ArrayList();
		
		try {
			conn = dataSource.getConnection();
			PreparedStatement ps = conn.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			while(rs.next()){
				tipoGlosario = new TipoGlosario(
						rs.getString("id_tipo_glosario"),
						rs.getString("codigo"), 
						rs.getString("nombre"), 
						rs.getString("descripcion"));
				arrayList.add(tipoGlosario);
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
	public TipoGlosario verGlosario(int idTipoGlosario) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String crearTipoGlosario(TipoGlosario tipoGlosario) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String actualizarTipoGlosario(TipoGlosario tipoGlosario) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String eliminarTipoGlosario(int idTipoGlosario) {
		// TODO Auto-generated method stub
		return null;
	}

}
