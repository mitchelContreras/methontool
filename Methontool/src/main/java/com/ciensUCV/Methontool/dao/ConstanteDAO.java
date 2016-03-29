package com.ciensUCV.Methontool.dao;

import com.ciensUCV.Methontool.model.Constante;

public interface ConstanteDAO {
	public int crearConstante (int idGlosarioConstante);
	public Constante actualizarConstante (int idProyecto, Constante constante);
	public Constante verConstante  (int idProyecto, int idGlosarioConstante);
}
