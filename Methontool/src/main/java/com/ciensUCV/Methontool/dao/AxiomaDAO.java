package com.ciensUCV.Methontool.dao;

import java.util.ArrayList;

import com.ciensUCV.Methontool.model.Axioma;
import com.ciensUCV.Methontool.model.Glosario;

public interface AxiomaDAO {

	public int crearAxioma (int idProyecto, int idGlosarioAxioma);
	public int actualizarAxioma (int idProyecto, Axioma Axioma);
	public Axioma verAxioma  (int idProyecto, int idGlosarioAxioma);
	public ArrayList<Integer> conceptoDadoAxioma (int idProyecto, int idGlosarioAxioma);
	public ArrayList<Integer> relacionDadoAxioma (int idProyecto, int idGlosarioAxioma);
	public ArrayList<Integer> atrbClaseDadoAxioma (int idProyecto, int idGlosarioAxioma);
	public ArrayList<Integer> atrbInstanciaDadoAxioma (int idProyecto, int idGlosarioAxioma);
}
