/**
 * 
 */
package com.ciensUCV.Methontool.rest.model;

/**
 * @author mitchell
 *
 */
public class ErrorEnviar {
	private String codigo;
	private String campo;
	private String mensaje;
	
	public ErrorEnviar() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ErrorEnviar(String codigo, String campo, String mensaje) {
		super();
		this.codigo = codigo;
		this.campo = campo;
		this.mensaje = mensaje;
	}
	public String getCodigo() {
		return codigo;
	}
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	public String getCampo() {
		return campo;
	}
	public void setCampo(String campo) {
		this.campo = campo;
	}
	public String getMensaje() {
		return mensaje;
	}
	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	@Override
	public String toString() {
		return "ErrorEnviar [codigo=" + codigo + ", campo=" + campo
				+ ", mensaje=" + mensaje + "]";
	}
	
	
	
}
