package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Specialite;
import com.example.demo.service.SpecialieService;

@RestController
@RequestMapping("api/specialites")
public class SpecialiteController {
	@Autowired
	private SpecialieService service;

	@PostMapping("/save")
	public Specialite save(@RequestBody Specialite o) {
		return service.save(o);
	}

	@GetMapping("/all")
	public List<Specialite> findAll() {
		return service.findAll();
	}

	@GetMapping("/find/{id}")
	public Specialite findById(@PathVariable String id) {
		return service.findById(Integer.parseInt(id));
	}

	@PostMapping("/update")
	public void update(@RequestBody Specialite o) {
		service.update(o);
	}

	@DeleteMapping("/delete")
	public void delete(@RequestBody Specialite o) {
		service.delete(o);
	}
}
