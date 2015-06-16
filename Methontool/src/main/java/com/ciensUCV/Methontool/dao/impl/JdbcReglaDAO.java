package com.ciensUCV.Methontool.dao.impl;

import java.util.ArrayList;

import com.ciensUCV.Methontool.dao.ReglaDAO;
import com.ciensUCV.Methontool.model.Regla;

public class JdbcReglaDAO implements ReglaDAO {

	@Override
	public int crearRegla(int idProyecto, int idGlosarioRegla) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Regla actualizarRegla(int idProyecto, Regla regla) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Regla verRegla(int idProyecto, int idGlosarioRegla) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ArrayList<Integer> conceptoDadoRegla(int idProyecto,
			int idGlosarioRegla) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ArrayList<Integer> relacionDadoRegla(int idProyecto,
			int idGlosarioRegla) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ArrayList<Integer> atrbClaseDadoRegla(int idProyecto,
			int idGlosarioRegla) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ArrayList<Integer> atrbInstanciaDadoRegla(int idProyecto,
			int idGlosarioRegla) {
		// TODO Auto-generated method stub
		return null;
	}

}
