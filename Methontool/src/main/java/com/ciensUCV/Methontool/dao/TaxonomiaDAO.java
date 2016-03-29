package com.ciensUCV.Methontool.dao;

import java.util.ArrayList;

import com.ciensUCV.Methontool.model.Taxonomia;

public interface TaxonomiaDAO {
	public ArrayList<Taxonomia> listarTaxonomia (int idProyecto);
	public Taxonomia verTaxonomia (int idProyecto, int idConceptoOrigen);
	public int actualizarTaxonomia (int idProyecto, Taxonomia taxonomia);
}
