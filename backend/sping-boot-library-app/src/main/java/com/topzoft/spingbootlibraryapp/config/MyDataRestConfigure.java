package com.topzoft.spingbootlibraryapp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.topzoft.spingbootlibraryapp.entity.Book;
import com.topzoft.spingbootlibraryapp.entity.Review;

@Configuration
public class MyDataRestConfigure implements RepositoryRestConfigurer {
	public String theAllowedOrigin ="http://localhost:3001";
	
	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
		HttpMethod [] theUnsupportedActions = {HttpMethod.DELETE,HttpMethod.POST,HttpMethod.PATCH} ;
		
		config.exposeIdsFor(Book.class);
		config.exposeIdsFor(Review.class);
		
		disableHttpMethods(Book.class,config,theUnsupportedActions);
		
		disableHttpMethods(Review.class,config,theUnsupportedActions);
		/* Configure CORS mapping */
		
		cors.addMapping(config.getBasePath() + "/**").allowedOrigins(theAllowedOrigin);
	}

	private void disableHttpMethods(Class theClass, RepositoryRestConfiguration config,
			HttpMethod[] theUnsupportedActions) {
		
		config.getExposureConfiguration().forDomainType(theClass)
		.withItemExposure((metadata,httpMethods)->httpMethods.disable(theUnsupportedActions))
		.withCollectionExposure((metadata, httpMethods)->httpMethods.disable(theUnsupportedActions));
		
	}

}
