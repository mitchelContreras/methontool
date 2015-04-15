package com.ciensUCV.Methontool.dao;

import java.util.ArrayList;

import com.ciensUCV.Methontool.model.NivelFormalidad;

public interface NivelFormalidadDAO {
	public ArrayList<NivelFormalidad> listarNivelFormalidad();
	public NivelFormalidad verNivelFormalidad(int idNivelFormalidad);
	public int crearNivelFormalidad(NivelFormalidad nivelFormalidad);
	public int actualizarNivelFormalidad(NivelFormalidad nivelFormalidad);
	public int eliminarNivelFormalidad(int idNivelFormalidad); 
}
