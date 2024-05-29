package com.birthday.aad.Controller;

import com.birthday.aad.Entity.Theme;
import com.birthday.aad.Service.ThemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/theme")
@CrossOrigin(origins = "http://localhost:5173")
public class ThemeController {

    private final ThemeService themeService;

    @Autowired
    public ThemeController(ThemeService themeService) {
        this.themeService = themeService;
    }

    @PostMapping("/create")
    public ResponseEntity<Theme> createTheme(@RequestBody Theme theme) {
        return ResponseEntity.status(HttpStatus.CREATED).body(themeService.createTheme(theme));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Theme>> getAllThemes() {
        return ResponseEntity.ok(themeService.getAllThemes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Theme> getThemeById(@PathVariable Long id) {
        Optional<Theme> theme = themeService.getThemeById(id);
        return theme.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/update")
    public ResponseEntity<Theme> updateTheme(@RequestBody Theme theme) {
        return ResponseEntity.ok(themeService.updateTheme(theme));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteTheme(@PathVariable Long id) {
        themeService.deleteTheme(id);
        return ResponseEntity.noContent().build();
    }
}
