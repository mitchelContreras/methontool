package com.ciensUCV.Methontool.dao;

import java.util.ArrayList;

import com.ciensUCV.Methontool.model.Glosario;

public interface GlosarioDAO {
	public ArrayList<Glosario> listarGlosario (int idProyecto);
	public Glosario verGlosario (int idGlosario);
	public Glosario crearGlosario (int idProyecto, Glosario glosario);
	public String actualizarGlosario (Glosario glosario);
	public String eliminarGlosario (int idProyecto, int idGlosario);
}
