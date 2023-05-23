package com.example.demo.entities;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.persistence.JoinColumn;

@Entity
@Table(name = "restaurants")
public class Restaurant {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String lattitude;
	private String longtitude;
	private String adresse;
	@Temporal(TemporalType.DATE)
	private Date close;
	private int rang;
	private String Weekend;
	private String photo;
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(
	    joinColumns = {
	            @JoinColumn(name = "restaurant_id", referencedColumnName = "id")
	    },
	    inverseJoinColumns = {
	            @JoinColumn(name = "specialite_id", referencedColumnName = "id")
	    }
	)
	private List<Specialite> specialites;

	@ManyToOne
	private Serie serie;
	@ManyToOne
	private User user;
	@ManyToOne
	private Zone zone;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getLattitude() {
		return lattitude;
	}
	public void setLattitude(String lattitude) {
		this.lattitude = lattitude;
	}
	public String getLongtitude() {
		return longtitude;
	}
	public void setLongtitude(String longtitude) {
		this.longtitude = longtitude;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public Date getClose() {
		return close;
	}
	public void setClose(Date close) {
		this.close = close;
	}
	public int getRang() {
		return rang;
	}
	public void setRang(int rang) {
		this.rang = rang;
	}
	public String getWeekend() {
		return Weekend;
	}
	public void setWeekend(String weekend) {
		Weekend = weekend;
	}
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	public Serie getSerie() {
		return serie;
	}
	public void setSerie(Serie serie) {
		this.serie = serie;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Zone getZone() {
		return zone;
	}
	public void setZone(Zone zone) {
		this.zone = zone;
	}
	public Restaurant() {
		super();
	}
	public List<Specialite> getSpecialites() {
		return specialites;
	}
	public void setSpecialites(List<Specialite> specialites) {
		this.specialites = specialites;
	}
	
	
}
