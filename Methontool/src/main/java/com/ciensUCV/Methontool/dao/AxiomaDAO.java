package com.ciensUCV.Methontool.dao;

import java.util.ArrayList;

import com.ciensUCV.Methontool.model.Axioma;
import com.ciensUCV.Methontool.model.Glosario;

public interface AxiomaDAO {

	public int crearAxioma (int idProyecto, int idGlosarioAxioma);
	public Axioma actualizarAxioma (int idProyecto, Axioma Axioma);
	public Axioma verAxioma  (int idProyecto, int idGlosarioAxioma);
	public ArrayList<Glosario> conceptoDadoAxioma (int idProyecto, int idGlosarioAxioma);
	public ArrayList<Glosario> relacionDadoAxioma (int idProyecto, int idGlosarioAxioma);
	public ArrayList<Glosario> atrbClaseDadoAxioma (int idProyecto, int idGlosarioAxioma);
	public ArrayList<Glosario> atrbInstanciaDadoAxioma (int idProyecto, int idGlosarioAxioma);
}
