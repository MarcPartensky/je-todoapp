package com.example.accessingdatamysql;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

// @CrossOrigin(origins = "http://marcpartensky.com")
@Controller
@RequestMapping(path="/todo")
public class MainController {
  @Autowired
  private TodoRepository todoRepository;

	// Create
  @PostMapping(path="/create")
	@ResponseBody
  public String create (
		@RequestParam String content,
		@RequestParam Boolean done
		) {
    Todo todo = new Todo();
		todo.content = content;
		todo.done = done;
    todoRepository.save(todo);
    return "Created";
  }

	// Read
  @GetMapping(path="/{id}")
	@ResponseBody
	public Todo read (
		@PathVariable(value = "id") final int id
		) {
		Todo todo = todoRepository.findById(id).get();
    return todo;
  }

	// Update
	@PutMapping(value = "/{id}")
	@ResponseBody
  public String update (
		@PathVariable(value = "id") final int id,
		@RequestParam String content,
		@RequestParam Boolean done
		) {
		Todo todo = todoRepository.findById(id).get();
		todo.content = content;
		todo.done = done;
    todoRepository.save(todo);
    return "Updated";
  }

	// Delete
	@DeleteMapping(value = "/{id}")
	@ResponseBody
  public String delete (
		@PathVariable(value = "id") final int id
		) {
		try {
			Todo todo = todoRepository.findById(id).get();
			todoRepository.delete(todo);
			return "Deleted";
		} finally {
			return "Not found";
		}
  }

	// Read all
  @GetMapping(path="/all")
  public @ResponseBody Iterable<Todo> readAll() {
    return todoRepository.findAll();
  }
}
