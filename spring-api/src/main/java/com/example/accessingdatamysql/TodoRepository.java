package com.example.accessingdatamysql;
import org.springframework.data.repository.CrudRepository;
import com.example.accessingdatamysql.Todo;

public interface TodoRepository extends CrudRepository<Todo, Integer> {

}
