package com.topzoft.spingbootlibraryapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.topzoft.spingbootlibraryapp.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
