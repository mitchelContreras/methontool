package com.ciensUCV.Methontool.dao;

import java.util.ArrayList;

import com.ciensUCV.Methontool.model.Instancia;

public interface InstanciaDAO {

	public ArrayList<Instancia> listaInstanciaDadoIdGlosarioConcepto(int idGlosarioConcepto);
	public ArrayList<Instancia> listarInstanciaSinConceptoAsociado(int idProyecto);
	public Instancia verInstanciaDadoIdInstancia(int idInstancia);
	public Instancia verInstanciaDadoIdGlosarioInstancia (int idGlosarioInstancia);
}
