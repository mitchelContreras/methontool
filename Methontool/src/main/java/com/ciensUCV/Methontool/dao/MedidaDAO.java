package com.ciensUCV.Methontool.dao;

import java.util.ArrayList;

import com.ciensUCV.Methontool.model.Medida;

public interface MedidaDAO {
	public ArrayList<Medida> listarMedida();
	public Medida verMedida (Medida medida);
	public Medida actualizarMedida (Medida medida);
	public String eliminarMedida(Medida medida);
}
