package com.ciensUCV.Methontool.rest.model;

import java.util.ArrayList;

import com.ciensUCV.Methontool.model.Proyecto;


public class ProyectosMensaje extends MensajeBase {
	private ArrayList<Proyecto> proyectos;

	public ArrayList<Proyecto> getProyectos() {
		return proyectos;
	}

	public void setProyectos(ArrayList<Proyecto> entrada) {
		proyectos = entrada;
		
	}

	public ProyectosMensaje(ArrayList<Proyecto> entrada) {
		super();
		proyectos = entrada;
	}

	public ProyectosMensaje() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "ProyectosMensaje [Proyectos=" + proyectos + " , MensajeBase()="
				+ super.toString() + "]";
	}
	
	
	
}
