package com.ciensUCV.Methontool.dao;

import java.util.ArrayList;

import com.ciensUCV.Methontool.model.AtributoInstancia;

public interface AtributoInstanciaDAO {
	public ArrayList<AtributoInstancia> listarAtributoInstanciaDadoIdGlosarioConcepto(int idGlosarioConcepto);
	public ArrayList<AtributoInstancia> listarAtributoInstanciaSinConceptoAsociado(int idProyecto);
	public AtributoInstancia verAtributoInstancia (int idProyecto, int idGlosarioAtrbInstancia);
	public AtributoInstancia actualizarAtributoInstancia (int idProyecto, AtributoInstancia atributoInstancia);
}
