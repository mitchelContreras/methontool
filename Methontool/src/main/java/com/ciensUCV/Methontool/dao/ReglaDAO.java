package com.ciensUCV.Methontool.dao;

import java.util.ArrayList;

import com.ciensUCV.Methontool.model.Regla;

public interface ReglaDAO {
	public int crearRegla (int idProyecto, int idGlosarioRegla);
	public Regla actualizarRegla (int idProyecto, Regla regla);
	public Regla verRegla  (int idProyecto, int idGlosarioRegla);
	public ArrayList<Integer> conceptoDadoRegla (int idProyecto, int idGlosarioRegla);
	public ArrayList<Integer> relacionDadoRegla (int idProyecto, int idGlosarioRegla);
	public ArrayList<Integer> atrbClaseDadoRegla (int idProyecto, int idGlosarioRegla);
	public ArrayList<Integer> atrbInstanciaDadoRegla (int idProyecto, int idGlosarioRegla);
}
