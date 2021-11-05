import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from './index';
import { TextVariant } from './types';

describe('Text', () => {
  const renderText = 'This is Versent';
  it('should render Text with H1', () => {
    render(<Text variant={TextVariant.H1}>{renderText}</Text>);
    const textElement = screen.getByText(renderText);

    expect(textElement.tagName).toEqual('H1');
    expect(textElement.outerHTML).toEqual(`<h1>${renderText}</h1>`);
  });

  it('should render Text with H2', () => {
    render(<Text variant={TextVariant.H2}>{renderText}</Text>);
    const textElement = screen.getByText(renderText);

    expect(textElement.tagName).toEqual('H2');
    expect(textElement.outerHTML).toEqual(`<h2>${renderText}</h2>`);
  });

  it('should render Text with H3', () => {
    render(<Text variant={TextVariant.H3}>{renderText}</Text>);
    const textElement = screen.getByText(renderText);

    expect(textElement.tagName).toEqual('H3');
    expect(textElement.outerHTML).toEqual(`<h3>${renderText}</h3>`);
  });

  it('should render Text with H4', () => {
    render(<Text variant={TextVariant.H4}>{renderText}</Text>);
    const textElement = screen.getByText(renderText);

    expect(textElement.tagName).toEqual('H4');
    expect(textElement.outerHTML).toEqual(`<h4>${renderText}</h4>`);
  });

  it('should render Text with H5', () => {
    render(<Text variant={TextVariant.H5}>{renderText}</Text>);
    const textElement = screen.getByText(renderText);

    expect(textElement.tagName).toEqual('H5');
    expect(textElement.outerHTML).toEqual(`<h5>${renderText}</h5>`);
  });

  it('should render Text with p tag', () => {
    render(<Text variant={TextVariant.Body}>{renderText}</Text>);
    const textElement = screen.getByText(renderText);

    expect(textElement.tagName).toEqual('P');
    expect(textElement.outerHTML).toContain(`${renderText}</p>`);
  });

  it('should render Text with p tag with bold style', () => {
    render(
      <Text variant={TextVariant.Body} bold>
        {renderText}
      </Text>
    );
    const textElement = screen.getByText(renderText);

    expect(textElement.tagName).toEqual('P');
    expect(textElement.outerHTML).toContain(`${renderText}</p>`);
    expect(textElement).toHaveStyle(`font-weight: 700;`);
  });

  it('should render Text with span tag', () => {
    render(<Text variant={TextVariant.Label}>{renderText}</Text>);
    const textElement = screen.getByText(renderText);

    expect(textElement.tagName).toEqual('SPAN');
    expect(textElement.outerHTML).toContain(`${renderText}</span>`);
  });

  it('should render Text with span tag with bold style', () => {
    render(
      <Text variant={TextVariant.Label} bold>
        {renderText}
      </Text>
    );
    const textElement = screen.getByText(renderText);

    expect(textElement.tagName).toEqual('SPAN');
    expect(textElement.outerHTML).toContain(`${renderText}</span>`);
    expect(textElement).toHaveStyle(`font-weight: 700;`);
  });
});
