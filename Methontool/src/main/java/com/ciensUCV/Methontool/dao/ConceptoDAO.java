package com.ciensUCV.Methontool.dao;

import java.util.ArrayList;

import com.ciensUCV.Methontool.model.AtributoClase;
import com.ciensUCV.Methontool.model.AtributoInstancia;
import com.ciensUCV.Methontool.model.Instancia;

public interface ConceptoDAO {
	
	public String actualizarConcepto (ArrayList<Integer> listaInstancia
			,ArrayList<Integer> listaAtributoInstancia
			,ArrayList<Integer> listaAtributoClase
			,int idGlosarioConcepto); 

}
