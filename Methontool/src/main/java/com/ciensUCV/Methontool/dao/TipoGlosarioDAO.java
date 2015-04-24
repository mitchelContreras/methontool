package com.ciensUCV.Methontool.dao;

import java.util.ArrayList;

import com.ciensUCV.Methontool.model.TipoGlosario;

public interface TipoGlosarioDAO {
	public ArrayList<TipoGlosario> listarTipoGlosario ();
	public TipoGlosario verGlosario (int idTipoGlosario);
	public String crearTipoGlosario (TipoGlosario tipoGlosario);
	public String actualizarTipoGlosario (TipoGlosario tipoGlosario);
	public String eliminarTipoGlosario (int idTipoGlosario);
}
