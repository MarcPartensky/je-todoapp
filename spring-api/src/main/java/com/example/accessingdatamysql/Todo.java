package com.example.accessingdatamysql;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Todo {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  public Integer id;
  public String content;
  public Boolean done;
}
