package com.ciensUCV.Methontool.dao;

import java.util.ArrayList;

import com.ciensUCV.Methontool.model.TipoDeDato;

public interface TipoDeDatoDAO {

	public ArrayList<TipoDeDato> listarTipoDeDato();
	public TipoDeDato verTipoDeDato(String codTipoDeDato);
	public TipoDeDato actualizarTipoDeDato(TipoDeDato tipoDeDato);
	public String eliminarTipoDeDato (String codTipoDato);
}
