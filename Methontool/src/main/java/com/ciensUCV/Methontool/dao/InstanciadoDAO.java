package com.ciensUCV.Methontool.dao;


import java.util.ArrayList;

import com.ciensUCV.Methontool.model.Instancia;
import com.ciensUCV.Methontool.model.Instanciado;

public interface InstanciadoDAO {

	public Instanciado crearInstanciado (Instanciado instanciado, int idProyecto);
	public Instanciado actualizarInstanciado (Instanciado instanciado, int idProyecto);
	public Instanciado verInstanciado (Instanciado instanciado, int idProyecto);
	public int eliminarInstnaciado (Instanciado instanciado);
	public ArrayList<Instanciado> listarInstanciado(int idProyecto);
}
