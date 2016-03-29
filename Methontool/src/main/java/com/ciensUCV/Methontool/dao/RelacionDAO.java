package com.ciensUCV.Methontool.dao;

import java.util.ArrayList;

import com.ciensUCV.Methontool.model.Relacion;

public interface RelacionDAO {
	public ArrayList<Relacion> listarRelacion (int idProyecto, int idGlosarioRelacion);
	public Relacion crearRelacion (int idProyecto, Relacion relacion);
	public int eliminarRelacion (int idProyecto, int idRelacion);
	public Relacion actualizarRelacion (int idProyecto, Relacion relacion);
	public ArrayList<Relacion> listarRelacionDadoIdGlosarioConcepto(int idGLosarioProyecto);
}
