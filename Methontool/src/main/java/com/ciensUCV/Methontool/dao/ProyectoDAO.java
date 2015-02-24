/**
 * 
 */
package com.ciensUCV.Methontool.dao;

import java.util.ArrayList;

import com.ciensUCV.Methontool.model.Proyecto;

/**
 * @author mitchell
 *
 */
public interface ProyectoDAO {
	public ArrayList<Proyecto> listarProyectos(int idUsuario);
	public Proyecto verProyecto(int idUsuario, int idProyecto);
	public int crearProyecto(Proyecto proyecto, int [] usuarios);
	public int actualizarProyecto(Proyecto proyecto, int [] usuarios);
	public int eliminarProyecto(int idProyecto); 
}
