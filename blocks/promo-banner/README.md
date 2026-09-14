# Promo Banner Block

## Overview

The Promo Banner block displays a promotional image alongside a heading, supporting text, and a call-to-action button. It's ideal for sales announcements, seasonal campaigns, or highlighting a specific offer.

## Integration

### Block Configuration

This block does not require any configuration parameters. Content is defined directly in the block structure.

### Block Structure

The block is authored as four rows, each dedicated to one field:

1. **Image** (required): The promo image.
2. **Heading** (required): The banner headline. Author as a heading style (e.g. Heading 2) or plain text.
3. **Text** (optional): Supporting body copy.
4. **CTA** (optional): A link to the destination page. **Bold** the link (e.g. `**[Shop Now](https://example.com/sale)**`) so it is automatically styled as a primary button.

Example authoring structure:

```text
| Promo Banner |
|--------------|
| ![Sale](promo-image.jpg) |
| Limited Time Offer |
| Get 20% off all items this week only. |
| **[Shop Now](https://example.com/sale)** |
```

## Behavior Patterns

### Layout Behavior

- **Mobile**: Image stacked above the content.
- **Desktop (900px+)**: Image and content sit side by side, each taking 50% width.

### Error Handling

- **Missing image**: The image column is omitted; only the content renders.
- **Missing text**: The text paragraph is skipped.
- **Missing/unformatted CTA**: If the CTA link isn't bold-formatted, the block still applies `button primary` styling so it always renders as a button.
