package com.ciensUCV.Methontool.rest.model;

import java.util.ArrayList;

import com.ciensUCV.Methontool.model.Proyecto;


public class ProyectosMensaje extends MensajeBase {
	private ArrayList<Proyecto> Proyectos;

	public ArrayList<Proyecto> getProyectos() {
		return Proyectos;
	}

	public void setProyectos(ArrayList<Proyecto> proyectos) {
		Proyectos = proyectos;
	}

	public ProyectosMensaje(ArrayList<Proyecto> proyectos) {
		super();
		Proyectos = proyectos;
	}

	public ProyectosMensaje() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "ProyectosMensaje [Proyectos=" + Proyectos + " , MensajeBase()="
				+ super.toString() + "]";
	}
	
	
}
