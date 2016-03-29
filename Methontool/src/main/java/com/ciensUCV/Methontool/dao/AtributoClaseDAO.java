package com.ciensUCV.Methontool.dao;

import java.util.ArrayList;

import com.ciensUCV.Methontool.model.AtributoClase;

public interface AtributoClaseDAO {
	public ArrayList<AtributoClase> listarAtributoClaseDadoIdGlosarioConcepto (int idGlosarioConcepto);
	public ArrayList<AtributoClase> listarAtributoClaseSinConceptoAsociado(int idProyecto);
	public AtributoClase verAtributoClase(int idProyecto, int idGlosarioAtrbClase);
	public AtributoClase actualizarAtributoClase (int idProyecto, AtributoClase atributoClase);
}
