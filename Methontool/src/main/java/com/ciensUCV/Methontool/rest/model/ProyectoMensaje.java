package com.ciensUCV.Methontool.rest.model;

import com.ciensUCV.Methontool.model.Proyecto;

public class ProyectoMensaje extends MensajeBase {
	private Proyecto proyecto;

	public ProyectoMensaje() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProyectoMensaje(Proyecto proyecto) {
		super();
		this.proyecto = proyecto;
	}

	public Proyecto getProyecto() {
		return proyecto;
	}

	public void setProyecto(Proyecto proyecto) {
		this.proyecto = proyecto;
	}

	@Override
	public String toString() {
		return "ProyectoMensaje [proyecto=" + proyecto + ", MensajeBase()="
				+ super.toString() + "]";
	}
	
	
	
}
