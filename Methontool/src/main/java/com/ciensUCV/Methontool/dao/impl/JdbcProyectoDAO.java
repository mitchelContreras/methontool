package com.ciensUCV.Methontool.dao.impl;

import javax.sql.DataSource;

import com.ciensUCV.Methontool.dao.ProyectoDAO;

public class JdbcProyectoDAO implements ProyectoDAO {
	private DataSource dataSource;
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	
	
	
}
