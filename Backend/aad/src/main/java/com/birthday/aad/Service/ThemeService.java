package com.birthday.aad.Service;

import com.birthday.aad.Entity.Theme;
import com.birthday.aad.Repository.ThemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ThemeService {

    private final ThemeRepository themeRepository;

    @Autowired
    public ThemeService(ThemeRepository themeRepository) {
        this.themeRepository = themeRepository;
    }

    public Theme createTheme(Theme theme) {
        return themeRepository.save(theme);
    }

    public List<Theme> getAllThemes() {
        return themeRepository.findAll();
    }

    public Optional<Theme> getThemeById(Long id) {
        return themeRepository.findById(id);
    }

    public Theme updateTheme(Theme theme) {
        return themeRepository.save(theme);
    }

    public void deleteTheme(Long id) {
        themeRepository.deleteById(id);
    }
}
