package com.topzoft.spingbootlibraryapp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.topzoft.spingbootlibraryapp.entity.Book;

@Configuration
public class MyDataRestConfigure implements RepositoryRestConfigurer {
	public String theAllowedOrigin ="http://localhost:3000";
	
	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
		HttpMethod [] theUnsupportedActions = {HttpMethod.DELETE,HttpMethod.POST,HttpMethod.PATCH} ;
		
		config.exposeIdsFor(Book.class);
		
		disableHttpMethods(Book.class,config,theUnsupportedActions);
		
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
