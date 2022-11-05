package com.server.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "spring.datasource")
public class DbConfiguration {
    private String url;
    private String username;
    private String password;
}
