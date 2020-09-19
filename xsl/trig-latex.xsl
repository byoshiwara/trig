<?xml version='1.0'?>

<!--********************************************************************

Adapted from PreTeXt stylesheet pretext-latex-AIM.xsl


*********************************************************************-->

<!-- Conveniences for classes of similar elements -->
<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "../../mathbook/xsl/entities.ent">
    %entities;
]>

<!-- Identify as a stylesheet -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
    xmlns:xml="http://www.w3.org/XML/1998/namespace"
>

<!-- Override specific tenplates of the standard conversion -->
<xsl:import href="../../mathbook/xsl/pretext-latex.xsl" />

<!--  List Chapters and Sections in Table of Contents  -->
<xsl:param name="toc.level" select="'3'"/>
<!--simple numbering -->
<xsl:param name="numbering.theorems.level" select="'1'" />
<xsl:param name="numbering.projects.level" select="'1'" />
<xsl:param name="numbering.maximum.level" select="'2'" />
<xsl:template match="exercises//exercise" mode="xref-number">
    <xsl:apply-templates select="." mode="serial-number" />
</xsl:template>

<xsl:param name="latex.print" select="'yes'"/>


<!-- Intend output for rendering by pdflatex -->
<xsl:output method="text" />

<!-- "assemblage" -->
<!-- Boxed title -->
<xsl:template match="assemblage" mode="tcb-style">
    <xsl:text>enhanced, arc=2ex, colback=violet!5, colframe=violet!75!black,&#xa;</xsl:text>
    <xsl:text>colbacktitle=violet!45!white, coltitle=white, boxed title style={sharp corners, frame hidden},&#xa;</xsl:text>
    <xsl:text>fonttitle=\bfseries, attach boxed title to top left={xshift=4mm,yshift=-3mm}, top=3mm,&#xa;</xsl:text>
</xsl:template>

<!-- "definition" -->
<!-- Boxed title -->
<xsl:template match="definition" mode="tcb-style">
    <xsl:text>enhanced, arc=1ex, colback=teal!5, colframe=teal!75!black,&#xa;</xsl:text>
    <xsl:text>colbacktitle=teal!15, coltitle=black, boxed title style={sharp corners, frame hidden},&#xa;</xsl:text>
    <xsl:text>fonttitle=\bfseries, attach boxed title to top left={xshift=4mm,yshift=-3mm}, top=3mm,&#xa;</xsl:text>
</xsl:template>

<!-- "example" -->
<!-- Boxed title -->
<xsl:template match="example" mode="tcb-style">
    <xsl:text>enhanced, colback=white, colframe=black,&#xa;</xsl:text>
    <xsl:text>colbacktitle=blue!45!black, coltitle=white, boxed title style={sharp corners, frame hidden},&#xa;</xsl:text>
    <xsl:text>fonttitle=\bfseries, attach boxed title to top left={xshift=4mm,yshift=-3mm}, top=3mm,&#xa;</xsl:text>
</xsl:template>

<!-- "objectives", "outcomes", etc -->
<xsl:template match="objectives" mode="tcb-style">
    <xsl:text>enhanced, title engine=path, colback=white, boxed title style={sharp corners, frame hidden},&#xa;</xsl:text>
    <xsl:text>colframe=blue, colbacktitle=white, coltitle=black,fonttitle=\bfseries,attach boxed title to top left={xshift=4mm,yshift=-3mm}, top=0mm,&#xa;</xsl:text>
    <xsl:text>title style={left color=white, right color=white}, </xsl:text>
</xsl:template>

<xsl:template match="outcomes" mode="tcb-style">
     <xsl:text>enhanced, title engine=path, colback=white, boxed title style={sharp corners, frame hidden},&#xa;</xsl:text>
    <xsl:text>colframe=magenta!50!black, colbacktitle=white, coltitle=black,fonttitle=\bfseries,attach boxed title to top left={xshift=4mm,yshift=-3mm}, top=0mm,&#xa;</xsl:text>
    <xsl:text>title style={left color=white, right color=white}, </xsl:text>
</xsl:template>


</xsl:stylesheet>

