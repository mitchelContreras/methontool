package com.ciensUCV.Methontool.dao.impl;

import java.util.ArrayList;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ciensUCV.Methontool.dao.GlosarioDAO;
import com.ciensUCV.Methontool.model.Glosario;
import com.ciensUCV.Methontool.model.TipoGlosario;

public class JdbcGlosarioDAO implements GlosarioDAO {
	private static final Logger logger = LoggerFactory.getLogger(JdbcGlosarioDAO.class);
	
	private DataSource dataSource;
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	
	@Override
	public ArrayList<Glosario> listarGlosario(int idProyecto) {
		// TODO Auto-generated method stub
		ArrayList<Glosario> arrayList = new ArrayList<Glosario>();
		Glosario glosario = new Glosario ("1", null, "Primero||||Segundo||||Tercero",
				"Descripcion de glosario jo jo jo", new TipoGlosario("1", null, "Relacion", null),
				null, null, null, null, null, null, null, null, "primer glosario");
		arrayList.add(glosario);
		glosario = new Glosario ("2", null, "Primero||||Cuarto||||Tercero",
				"Descripcion de glosario tu tu tu", new TipoGlosario("2", null, "Concepto", null),
				null, null, null, null, null, null, null,  null,"segundo glosario");
		arrayList.add(glosario);
		glosario = new Glosario ("3", null, "Quinto||||Cuarto||||Tercero",
				"Descripcion de glosario otra vez", new TipoGlosario("3", null, "Atributo instancia", null),
				null, null, null, null, null, null, null, null, "tercero glosario");
		arrayList.add(glosario);
		glosario = new Glosario ("4", null, "Quinto||||Cuarto||||Sexto",
				"Descripcion de glosario ultimo", new TipoGlosario("4", null, "Atributo clase", null),
				null, null, null, null, null, null, null,  null,"cuarto glosario");
		arrayList.add(glosario);
		return arrayList;
	}

	@Override
	public Glosario verGlosario(int idProyecto, int idGlosario) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String crearGlosario(int idProyecto, Glosario glosario) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String actualizarGlosario(Glosario glosario) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String eliminarGlosario(int idProyecto, int idGlosario) {
		// TODO Auto-generated method stub
		return null;
	}

}
