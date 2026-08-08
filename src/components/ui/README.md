# shadcn/ui components

Components are added here using `npx shadcn add <component>`.

The `components.json` in the project root configures shadcn to place components
in this directory with the alias `@/components/ui`.

## Adding components

```bash
# Example — add the Button component
npx shadcn add button

# Add multiple at once
npx shadcn add button card badge input label
```

## Notes

- Run `shadcn add` commands from the project root (`e:/bozkurt`)
- Components will be generated as `.tsx` files in this directory
- All components use the CSS variable tokens defined in `src/app/globals.css`
- Switch between navy (Çilingir) and amber (Oto Anahtarcı) palettes by wrapping
  a section in `<div data-division="cilingir">` or `<div data-division="oto-anahtarci">`
