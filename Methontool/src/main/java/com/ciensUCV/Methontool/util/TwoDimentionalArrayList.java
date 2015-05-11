package com.ciensUCV.Methontool.util;

import java.util.ArrayList;
import java.lang.reflect.Array;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TwoDimentionalArrayList<T> extends ArrayList<ArrayList<T>> {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private static final Logger logger = LoggerFactory.getLogger(TwoDimentionalArrayList.class);
	
	public void addToInnerArray(int index, T element) {
        while (index >= this.size()) {
            this.add(new ArrayList<T>());
        }
        this.get(index).add(element);
    }

    public void addToInnerArray(int index, int index2, T element) {
        while (index >= this.size()) {
            this.add(new ArrayList<T>());
        }

        ArrayList<T> inner = this.get(index);
        while (index2 >= inner.size()) {
            inner.add(null);
        }
        inner.set(index2, element);
    }
    
    
    public T[] returnArr(int i){
    	T[] salida = null;
    	try {
    		int size = this.get(i).size();
    		ArrayList<T> arrayList= this.get(i);
    		
        	salida = (T[]) Array.newInstance(this.get(i).get(0).getClass(), size);
        	for(int itera = 0; itera< size; itera++){
        		salida[itera] = arrayList.get(itera);
        	}			
		} catch (Exception e) {
			// TODO: handle exception
			logger.debug(e.toString());
		}

    	return salida;
    }
}