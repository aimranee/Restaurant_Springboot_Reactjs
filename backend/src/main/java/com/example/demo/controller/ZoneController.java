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

import com.example.demo.entities.Zone;
import com.example.demo.service.ZoneService;

@RestController
@RequestMapping("api/zones")
public class ZoneController {
	@Autowired
	private ZoneService service;

	@PostMapping("/save")
	public Zone save(@RequestBody Zone o) {
		return service.save(o);
	}

	@GetMapping("/all")
	public List<Zone> findAll() {
		return service.findAll();
	}

	@GetMapping("/find/{id}")
	public Zone findById(@PathVariable String id) {
		return service.findById(Integer.parseInt(id));
	}

	@PostMapping("/update")
	public void update(@RequestBody Zone o) {
		service.update(o);
	}

	@DeleteMapping("/delete")
	public void delete(@RequestBody Zone o) {
		service.delete(o);
	}

}
