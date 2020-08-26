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


<!-- Intend output for rendering by pdflatex -->
<xsl:output method="text" />

<!-- "assemblage" -->
<!-- Boxed title -->
<xsl:template match="assemblage" mode="tcb-style">
    <xsl:text>enhanced, arc=2ex, colback=violet!5, colframe=violet!75!black,&#xa;</xsl:text>
    <xsl:text>colbacktitle=violet!75!black, coltitle=white, boxed title style={sharp corners, frame hidden},&#xa;</xsl:text>
    <xsl:text>fonttitle=\bfseries, attach boxed title to top left={xshift=4mm,yshift=-3mm}, top=3mm,&#xa;</xsl:text>
</xsl:template>

<!-- ASIDE-LIKE: "aside", "historical", "biographical" -->
<!-- Square, drop shadow                               -->
<xsl:template match="&ASIDE-LIKE;" mode="tcb-style">
    <xsl:text>enhanced, sharp corners, colback=blue!3, colframe=blue!50!black,&#xa;</xsl:text>
    <xsl:text>add to width=-1ex, shadow={1ex}{-1ex}{0ex}{black!50!white},&#xa;</xsl:text>
    <xsl:text>coltitle=black, fonttitle=\bfseries, attach title to upper, after title={\space},</xsl:text>
</xsl:template>

</xsl:stylesheet>

