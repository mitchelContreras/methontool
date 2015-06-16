package com.ciensUCV.Methontool.dao.impl;

import java.util.ArrayList;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ciensUCV.Methontool.dao.AxiomaDAO;
import com.ciensUCV.Methontool.model.Axioma;
import com.ciensUCV.Methontool.model.Glosario;

public class JdbcAxiomaDAO implements AxiomaDAO {
	private static final Logger logger = LoggerFactory.getLogger(JdbcAxiomaDAO.class);
	
	private DataSource dataSource;
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	
	@Override
	public Axioma actualizarAxioma(int idProyecto, Axioma Axioma) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Axioma verAxioma(int idProyecto, int idGlosarioAxioma) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int crearAxioma(int idProyecto, int idGlosarioAxioma) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public ArrayList<Glosario> conceptoDadoAxioma(int idProyecto,
			int idGlosarioAxioma) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ArrayList<Glosario> relacionDadoAxioma(int idProyecto,
			int idGlosarioAxioma) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ArrayList<Glosario> atrbClaseDadoAxioma(int idProyecto,
			int idGlosarioAxioma) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ArrayList<Glosario> atrbInstanciaDadoAxioma(int idProyecto,
			int idGlosarioAxioma) {
		// TODO Auto-generated method stub
		return null;
	}

}
