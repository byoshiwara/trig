<!--  This file is part of the book                  -->
<!--   Modeling, Functions, and Graphs   -->
<!--                                                 -->
<!--  Copyright (C) 2016 Katherine Yoshiwara            -->
<!--
 Parts of this file were adapted from the author guide at https://github.com/rbeezer/mathbook and the analagous file at https://github.com/twjudson/aata 
-->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<!--
 Assumes current file is in trig/xsl and that the mathbook repository is adjacent 
-->
<xsl:import href="../../mathbook/xsl/mathbook-html.xsl"/>
<!--
 Or make a thin customization layer and use 'select' to provide overrides 
-->
<!--    -->
<!--  List Chapters and Sections in Table of Contents  -->
<xsl:param name="toc.level" select="'3'"/>
<!--simple numbering -->
<xsl:param name="numbering.projects.level" select="'1'" />
<xsl:param name="numbering.theorems.level" select="'1'" /> 
<xsl:param name="numbering.maximum.level" select="'2'" /> 
<xsl:template match="exercises//exercise" mode="xref-number">
    <xsl:apply-templates select="." mode="serial-number" />
</xsl:template>
<!-- Knowls -->
<xsl:param name="html.knowl.example" select="'no'" />
<xsl:param name="html.knowl.exercise.inline" select="'no'" />
<xsl:param name="html.knowl.example.solution" select="'yes'" />
<xsl:param name="html.knowl.warning" select="'no'" />
<xsl:param name="html.knowl.technology" select="'no'" />
<!-- color theme -->
<xsl:param name="html.css.file"   select="'mathbook-3.css'" />

<xsl:param name="exercise.divisional.answer" select="'no'" />
<xsl:param name="exercise.divisional.solution" select="'no'" />


</xsl:stylesheet>